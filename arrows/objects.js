const team = {
    members: ['Jane', 'Billy'], 
    teamName: 'Super Squad', 
    teamSummary: function() {
        return this.members.map(function(member) { 
            return `${member} is on team ${this.teamName}`;  
        });
    } 
}; 

team.teamSummary(); 


const team2 = {
    members: ['kemet', 'khu'], 
    teamName: 'Super Squad2', 
    teamSummary: function() {
        return this.members.map((member) => `${member} is on ${this.teamName}`); 
}}

team2.teamSummary(); 
