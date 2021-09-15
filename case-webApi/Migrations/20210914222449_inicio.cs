using Microsoft.EntityFrameworkCore.Migrations;

namespace case_webApi.Migrations
{
    public partial class inicio : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Escola",
                columns: table => new
                {
                    idEscola = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    nome = table.Column<string>(nullable: true),
                    data = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Escola", x => x.idEscola);
                });

            migrationBuilder.CreateTable(
                name: "Turma",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    nome = table.Column<string>(nullable: true),
                    data = table.Column<string>(nullable: true),
                    idEscola = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Turma", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Escola");

            migrationBuilder.DropTable(
                name: "Turma");
        }
    }
}
