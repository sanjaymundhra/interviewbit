module.exports = { 
 //param A : array of integers
 //return a array of integers
	plusOne : function(A){
	    i=0;
		    while(A[i]==0){
		        i++;
		    }
		    if (A.length==i) return "1";
		    j=0;
		    while(A[j]==9){
		        j++;
		    }
		    string ="";		    
		    if (A.length==j){
		    	for(j=0;j<A.length;j++){
	            	string += "0";
	        	}
	        	return "1" + string;
		    }
		    var n = A.length-1;
		    var carry = 1;
	        while(carry==1){
	            if (A[n]+carry==10) {
	            	A[n--]=0;
	            	carry=1;
	            }
	            else{
	            	A[n] += carry;
	            	carry=0;
	            }
	        }
	        
	        for(i;i<A.length;i++){
	        	if (carry==1) {
	        		string +="1";
	        	}
	            string += A[i];
	        }
	        return string;
	}
};