module.exports = { 
 //param A : array of integers
 //return a array of integers
	maxset : function(A){
        n = A.length;
        if(n==1 && A[0]>=0) return A;
        sum = 0;start=0;end=0;maxsum=0;len=0;B=[];
        minstart=-1;
        maxend=-1;
        j=0;
        for(i=0;i<n;i++){
            if(A[i]>=0){
                sum = sum+A[i];
                B[j++]=i;
                if(sum>maxsum || (sum==maxsum && B.length>len) ){
                    maxsum=sum;
                    minstart=B[0];
                    maxend=i;
                    len=B.length;
                }                
            }
            else{
                B=[];
                sum=0;
                j=0;                
            }            
        }
        if (minstart==-1) {return "" ;}
        return A.slice(minstart,maxend+1); 
	}
};
