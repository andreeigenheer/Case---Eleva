namespace case_webApi.Models
{
    public class escola{

        public escola()  { }
        
        public escola(int id, string escola, string data) 
        {
            this.idEscola = idEscola;
            this.escola = escola;
            this.data = data;
               
        }

        public int idEscola { get; set; }
  
        public string escola { get; set; }
  
        public string data { get; set; }  
  
    }
}