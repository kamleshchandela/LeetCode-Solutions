class Solution {
public:
    double average(vector<int>& salary) {
        int max = 0 ;
        int min = 2147483647 ;
        for(int i = 0 ; i < salary.size() ; i++){
            if(max<salary[i]){
                max = salary[i] ;
            }
            if(min>salary[i]){
                min = salary[i] ;
            }
        }
        double sum = 0 ;
        for(int i = 0 ; i < salary.size() ; i++){
            if(salary[i] != max && salary[i] != min){
                sum = sum + salary[i] ; 
            }
        }
        return (double)(sum/(salary.size()-2)) ;
    }
};