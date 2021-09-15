namespace case_webApi.Models
{
    public class turma{

        public turma()  { }
        
        public turma(int id, string nome, string data) 
        {
            this.id = id;
            this.nome = nome;
            this.data = data;
            this.idEscola = idEscola;
               
        }

        public int id { get; set; }
  
        public string nome { get; set; }
  
        public string data { get; set; }  

        public int idEscola { get; set; } 
  
    }
}