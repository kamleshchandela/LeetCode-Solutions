import os
import subprocess
import re
from datetime import datetime

def run_git_backdate():
    root_dir = os.getcwd()
    
    # regex for date: YYYY-MM-DD HH.MM.SS
    date_pattern = re.compile(r"^(\d{4}-\d{2}-\d{2}) (\d{2})\.(\d{2})\.(\d{2})")

    # 1. We identify folders
    items = sorted(os.listdir(root_dir))
    folders = [i for i in items if os.path.isdir(os.path.join(root_dir, i)) and not i.startswith('.')]
    
    print(f"Found {len(folders)} folders to process.")

    for folder in folders:
        folder_path = os.path.join(root_dir, folder)
        
        # Get all solution files and their dates
        files = os.listdir(folder_path)
        solutions = []
        for f in files:
            if f == "debug.log": continue
            match = date_pattern.match(f)
            if match:
                # Store as tuple (datetime_obj, filename, formatted_date_str)
                date_str = f"{match.group(1)} {match.group(2)}:{match.group(3)}:{match.group(4)}"
                dt = datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S")
                solutions.append((dt, f, date_str))
        
        # Sort solutions by date
        solutions.sort(key=lambda x: x[0])
        
        if not solutions:
            # If no solution files found, check if there's a README to commit with current time
            readme_path = os.path.join(folder, "README.md")
            if os.path.exists(os.path.join(root_dir, readme_path)):
                subprocess.run(["git", "add", readme_path], check=True)
                subprocess.run(["git", "commit", "-m", f"Add README: {folder}"], capture_output=True)
                print(f"  Added standalone README for {folder}")
            continue

        # Process the first solution (and includes README.md)
        first_dt, first_file, first_date_str = solutions[0]
        
        # Add README.md if it exists
        readme_path = os.path.join(folder, "README.md")
        if os.path.exists(os.path.join(root_dir, readme_path)):
            subprocess.run(["git", "add", readme_path], check=True)
        
        # Add first solution
        subprocess.run(["git", "add", os.path.join(folder, first_file)], check=True)
        
        # Commit first submission + README
        env = os.environ.copy()
        env["GIT_AUTHOR_DATE"] = first_date_str
        env["GIT_COMMITTER_DATE"] = first_date_str
        
        subprocess.run(
            ["git", "commit", "-m", f"Add solution and README: {folder}"],
            env=env,
            capture_output=True,
            text=True
        )
        print(f"  Committed first solution + README for {folder} ({first_date_str})")
        
        # Commit remaining solutions
        for dt, filename, ds in solutions[1:]:
            subprocess.run(["git", "add", os.path.join(folder, filename)], check=True)
            env = os.environ.copy()
            env["GIT_AUTHOR_DATE"] = ds
            env["GIT_COMMITTER_DATE"] = ds
            subprocess.run(
                ["git", "commit", "-m", f"Add solution: {folder}"],
                env=env,
                capture_output=True,
                text=True
            )
            print(f"    Committed sub-solution: {filename}")

    # Finally, add the script itself
    if os.path.exists("git_backdate.py"):
        subprocess.run(["git", "add", "git_backdate.py"], check=True)
        subprocess.run(["git", "commit", "-m", "Add automation script"], capture_output=True)

    print("\nDone! Run: git push -u origin main --force")

if __name__ == "__main__":
    run_git_backdate()
