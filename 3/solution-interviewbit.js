module.exports = { 
 //param A : array of integers
 //return an integer
	solve : function(A){
        n=A.length-1;
        A.sort();p=0;
		for(i=0;i<n;i++){
		    if(A[i]<A[i+1])	{
		        p=n-i;
		        if(A[i]==p) 
			        return "1";
		    }			
		}
		if (A[n]==0) return "1";
		return "-1";
	}
};
