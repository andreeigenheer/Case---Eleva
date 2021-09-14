namespace case_webApi.Models
{
    public class turma{

        public turma()  { }
        
        public turma(int id, string turma, string data) 
        {
            this.id = id;
            this.turma = turma;
            this.data = data;
            this.idEscola = idEscola
               
        }

        public int id { get; set; }
  
        public string turma { get; set; }
  
        public string data { get; set; }  

        public int idEscola { get; set; } 
  
    }
}