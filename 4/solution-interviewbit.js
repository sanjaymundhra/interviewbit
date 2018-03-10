module.exports = { 
 //param A : array of integers
 //return a array of integers
	wave : function(A){
         A.sort(function(a,b){ return a-b});
        n=A.length;
        if(n%2==1)n=n-1;
        temp=0;
        for(i=0;i<n;i+=2){
            temp=A[i+1];
            A[i+1]=A[i];
            A[i]=temp;
        }
        return A;
	}
};
