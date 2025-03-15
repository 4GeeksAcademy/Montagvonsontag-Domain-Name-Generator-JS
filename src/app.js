import "bootstrap";
import "./style.css";

window.onload = function() {

const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon', 'telecom'];
const domain = ['es', 'com', 'io', 'net', 'us'];

for (let i in pronoun){
  for (let j in adj){
    for (let k in noun){
      for (let l in domain){
        let fulldomain=(pronoun[i]+adj[j]+noun[k]+"."+domain[l]);
        console.log(fulldomain);  
        
      }
    }
  } 
}

}
