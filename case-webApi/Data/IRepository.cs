using System.Threading.Tasks;
using case_webApi.Models;

namespace case_webApi.Data
{
    public interface IRepository
    {
         void Add<T>(T entity) where T : class;
         void Update<T>(T entity) where T : class;
         void Delete<T>(T entity) where T : class;
        Task<bool> SaveChangesAsync();

        Task<escola[]> GetAllEscolaAsync(bool includeTurma);

        Task<turma[]> GetAllTurmaAsync (bool includeEscola);       

    }
}