<!-- omit from TOC -->
<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" width="120" />
</p>

<h1 align="center">LeetCode Solutions</h1>

<p align="center">
  <a href="#overview"><img src="https://img.shields.io/badge/-Overview-blue" /></a>
  <a href="#features"><img src="https://img.shields.io/badge/-Features-green" /></a>
  <a href="#tech-stack"><img src="https://img.shields.io/badge/-Tech%20Stack-orange" /></a>
  <a href="#project-structure"><img src="https://img.shields.io/badge/-Structure-purple" /></a>
  <a href="#quick-start"><img src="https://img.shields.io/badge/-Quick%20Start-red" /></a>
  <a href="#usage"><img src="https://img.shields.io/badge/-Usage-yellow" /></a>
  <a href="#problem-categories"><img src="https://img.shields.io/badge/-Categories-cyan" /></a>
  <a href="#automation"><img src="https://img.shields.io/badge/-Automation-pink" /></a>
  <a href="#contributing"><img src="https://img.shields.io/badge/-Contributing-lightgrey" /></a>
  <a href="#license"><img src="https://img.shields.io/badge/-License-brightgreen" /></a>
</p>

> A comprehensive collection of **203 LeetCode problem solutions** with detailed documentation, multiple approaches, and real-world performance metrics.

---

<p align="center">
  <img src="https://img.shields.io/badge/Problems-203-green" />
  <img src="https://img.shields.io/badge/JavaScript-C%2B%2B-blue" />
  <img src="https://img.shields.io/badge/Updated-April%202026-orange" />
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
</p>

---

## Navigation

| Section | Description |
|---------|-------------|
| [Overview](#overview) | Repository introduction and purpose |
| [Features](#features) | Key capabilities and highlights |
| [Tech Stack](#tech-stack) | Technologies used |
| [Project Structure](#project-structure) | Directory layout |
| [Quick Start](#quick-start) | Getting started in 30 seconds |
| [Usage](#usage) | How to browse and run solutions |
| [Problem Categories](#problem-categories) | Problems organized by topic |
| [Automation](#automation) | Git backdating tools |
| [Contributing](#contributing) | How to contribute |
| [License](#license) | Licensing information |
| [Author](#author) | Contact and credits |

---

<a name="overview"></a>
## Overview

This repository documents my algorithmic problem-solving journey on LeetCode, containing **203 solved problems** across all difficulty levels. Each problem includes:

| Component | Description |
|-----------|-------------|
| 📝 Problem Statement | Clear requirements and constraints |
| 💡 Approach | Multiple solutions from brute force to optimal |
| 📊 Complexity | Time and space analysis |
| ✅ Test Cases | Verified inputs and outputs |
| 🏆 Best Solution | Highest performing accepted code |
| 📈 History | Timestamped submission record |

### Why This Repository?

- **Learning** — Documenting problem-solving techniques and algorithmic patterns
- **Reference** — Creating a searchable knowledge base for common coding patterns  
- **Progress** — Tracking improvement through submission history and metrics

---

<a name="features"></a>
## Features

### Core Features

| Feature | Description |
|---------|-------------|
| 📚 **Comprehensive Docs** | Statement, intuition, approach, and complexity for each problem |
| 🔄 **Multiple Approaches** | Brute force → optimal with trade-off explanations |
| 📊 **Performance Metrics** | Runtime and memory stats for every accepted submission |
| ✅ **Verified Test Cases** | Input/output examples with detailed explanations |
| 📈 **Submission History** | Timestamped entries showing problem-solving progress |

### Additional Features

| Feature | Description |
|---------|-------------|
| 🌐 **Bilingual Solutions** | Implementations in both JavaScript and C++ |
| 🤖 **Git Automation** | Script to preserve original submission timestamps |
| 📂 **Consistent Structure** | Uniform folder naming and file organization |
| 🔍 **Easy Navigation** | Numbered problem folders for quick access |

---

<a name="tech-stack"></a>
## Tech Stack

```
┌─────────────────────────────────────────────────────────┐
│                      Tech Stack                        │
├──────────────────┬────────────────────────────────────┤
│  Primary Lang    │  JavaScript (Node.js)               │
│  Secondary Lang  │  C++ (C++17)                         │
│  Version Control │  Git                                 │
│  Automation      │  Python 3                            │
└──────────────────┴────────────────────────────────────┘
```

---

<a name="project-structure"></a>
## Project Structure

```
Leetcode-Submissions/
│
├── 1-two-sum/
│   ├── README.md
│   ├── 2026-04-12 13.18.43 - Accepted - runtime 92ms.js
│   └── 2026-01-03 21.47.43 - Accepted - runtime 90ms.js
│
├── 9-palindrome-number/
│   ├── README.md
│   └── ...
│
├── 136-single-number/
│   ├── README.md
│   └── ...
│
├── 2274-keep-multiplying-found-values-by-two/
│   ├── README.md
│   └── ...
│
├── ...
│
├── git_backdate.py          # Git timestamp automation
├── LICENSE                  # MIT License
└── README.md                # This file
```

### Naming Convention

```
problem-number-kebab-case-name
├── README.md                    # Required
├── solution.js                 # Required (at least one)
└── solution.cpp                # Optional
```

| Example | Format |
|---------|--------|
| `1-two-sum` | Easy |
| `136-single-number` | Easy |
| `164-maximum-gap` | Hard |
| `2274-keep-multiplying-found-values-by-two` | Medium |

---

<a name="quick-start"></a>
## Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/your-username/Leetcode-Submissions.git

# 2. Navigate to a problem
cd 1-two-sum

# 3. View problem details
cat README.md
```

**Done!** You're ready to explore solutions.

---

<a name="usage"></a>
## Usage

### 📖 Reading a Problem

Each `README.md` follows this structure:

```markdown
# 🚀 LeetCode #1 - Two Sum

## 📝 Problem Statement
Given an array of integers nums and an integer target...

## 💡 Intuition & Approach
### Brute Force
Check every pair...

### Optimal (Hash Map)
Use a hash map for O(n) lookup...

## 📊 Complexity Analysis
| Approach    | Time  | Space |
|-------------|-------|-------|
| Brute Force | O(n²) | O(1)  |
| Hash Map    | O(n)  | O(n)  |

## ✅ Test Cases
Input: nums = [2,7,11,15], target = 9
Output: [0,1]

## 🏆 Best Solution (JavaScript)
```javascript
var twoSum = function(nums, target) { ... };
```

## 📈 Submission History
| Date | Status | Runtime | Memory |
|------|--------|---------|--------|
| 2026-04-12 | Accepted | 92ms | 53.9MB |
```

### 💻 Running Solutions

**JavaScript:**
```bash
node "1-two-sum/2026-04-12 13.18.43 - Accepted - runtime 92ms - memory 53.9MB.js"
```

**C++:**
```bash
g++ -o solution solution.cpp
./solution
```

---

<a name="problem-categories"></a>
## Problem Categories

| Category | Problems |
|----------|----------|
| 📊 **Arrays & Hashing** | Two Sum, Contains Duplicate, Single Number, Valid Anagram, Product of Array Except Self |
| 👆 **Two Pointers** | Remove Duplicates, Merge Sorted Array, 3Sum Closest, Container With Most Water |
| 🪟 **Sliding Window** | Maximum Subarray, Longest Substring Without Repeating Characters |
| 📚 **Stack** | Valid Parentheses, Score of Parentheses, Decode String |
| 🔍 **Binary Search** | Search Insert Position, Find Minimum in Rotated Sorted Array, Median of Two Sorted Arrays |
| 🧮 **Dynamic Programming** | Climbing Stairs, Fibonacci Number, House Robber, Longest Increasing Subsequence |
| 🔢 **Math** | Palindrome Number, Power of Two, Fizz Buzz, Greatest English Letter |
| 📝 **String** | Reverse String, Valid Palindrome, Reverse Words in a String |
| 🔢 **Bit Manipulation** | Single Number, Number of 1 Bits, Reverse Bits |
| 🌳 **Tree** | (Coming soon...) |

---

<a name="automation"></a>
## Automation

### Git Backdating

The `git_backdate.py` script preserves original LeetCode submission timestamps in git history:

```bash
# Run the automation script
python git_backdate.py

# Force push to update history
git push -u origin main --force
```

This ensures your commit history matches your actual problem-solving timeline.

---

<a name="contributing"></a>
## Contributing

Contributions are welcome! Follow these steps:

```bash
# 1. Fork the repository
# 2. Clone your fork
git clone https://github.com/your-username/Leetcode-Submissions.git

# 3. Create a feature branch
git checkout -b solution/new-problem

# 4. Add your solution
mkdir new-problem-folder
touch new-problem-folder/README.md
touch new-problem-folder/solution.js

# 5. Commit and push
git add .
git commit -m "Add solution for Problem #X"
git push origin solution/new-problem

# 6. Open a Pull Request
```

### 📋 New Problem Template

```markdown
# 🚀 LeetCode #X - Problem Name

## 📝 Problem Statement
[Description]

## 💡 Approach
[Your solution approach]

## 📊 Complexity
- Time: O()
- Space: O()

## ✅ Test Cases
[Add test cases]
```

---

<a name="license"></a>
## License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 Kamlesh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
...
```

See the [LICENSE](LICENSE) file for full details.

---

<a name="author"></a>
## Author

<div align="center">

**Kamlesh**

| Platform | Link |
|----------|------|
| 🌐 Portfolio | [kamleshchandela-portfolio.netlify.app](https://kamleshchandela-portfolio.netlify.app/videos) |
| 🐙 GitHub | [@kamleshchandela](https://github.com/kamleshchandela) |
| 📺 YouTube | [@KamleshChandela](https://www.youtube.com/@KamleshChandela-z5e) |
| 💻 LeetCode | [kamleshChandela](https://leetcode.com/u/kamleshChandela/) |

</div>

---

<p align="center">
  <sub>Built with determination and curiosity | Keep coding! 🚀</sub>
</p>
