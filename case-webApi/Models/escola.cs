namespace case_webApi.Models
{
    public class escola{

        public escola()  { }
        
        public escola(int id, string nome, string data) 
        {
            this.idEscola = idEscola;
            this.nome = nome;
            this.data = data;
               
        }

        public int idEscola { get; set; }
  
        public string nome { get; set; }
  
        public string data { get; set; }  
  
    }
}