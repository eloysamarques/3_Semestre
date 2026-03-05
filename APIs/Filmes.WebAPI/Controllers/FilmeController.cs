using Filmes.WebAPI.DTO;
using Filmes.WebAPI.Models;
using Filmes.WebAPI.Repositories;
using FilmesContext.WebAPI.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Filmes.WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class FilmeController : ControllerBase
{
    private readonly IFilmesRepository _filmeRepository;

    public FilmeController(IFilmesRepository filmeRepository)
    {
        _filmeRepository = filmeRepository;
    }

    [HttpGet("{id}")]
    public IActionResult GetById(Guid id)
    {
        try
        {
            return Ok(_filmeRepository.BuscarPorId(id));
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }

    //[Authorize]
    [HttpGet]
    public IActionResult Get()
    {
        try
        {
            return Ok(_filmeRepository.Listar());
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromForm] FilmeDTO filme) //recebe os dados do filme por form-data
    {
        if (String.IsNullOrWhiteSpace(filme.Nome))
            return BadRequest("É obrigatório que o filme tenha Nome e Gênero");

        Filme novoFilme = new Filme();

        if(filme.Imagem != null && filme.Imagem.Length != 0)
        {
            var extensao = Path.GetExtension(filme.Imagem.FileName); //pega a extensão do arquivo
            var nomeArquivo = $"{Guid.NewGuid()}{extensao}"; //gera um nome único para o arquivo
             
            var pastaRelativa = "wwwroot/imagens"; //pasta onde as imagens serão armazenadas, relativa à raiz do projeto
            var caminhoPasta = Path.Combine(Directory.GetCurrentDirectory(), pastaRelativa); //caminho absoluto da pasta

            //Garante que a pasta exista
            if (!Directory.Exists(caminhoPasta))
                Directory.CreateDirectory(caminhoPasta);

            var caminhoCompleto = Path.Combine(caminhoPasta, nomeArquivo); //caminho completo do arquivo

            using (var stream = new FileStream(caminhoCompleto, FileMode.Create))
            {
                await filme.Imagem.CopyToAsync(stream);
            }

            novoFilme.Imagem = nomeArquivo; //salva apenas o nome do arquivo no banco
        }

        novoFilme.IdGenero = filme.IdGenero.ToString();
        novoFilme.Titulo = filme.Nome;

        try
        {
            _filmeRepository.Cadastrar(novoFilme);
            return StatusCode(201);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(Guid id, FilmeDTO filmeAtualizado)
    {
        var filmeBucado = _filmeRepository.BuscarPorId(id);

        if (filmeBucado == null)
            return NotFound("Filme não encontrado!");

        if (!String.IsNullOrWhiteSpace(filmeAtualizado.Nome))
            filmeBucado.Titulo = filmeAtualizado.Nome;

        if (filmeAtualizado.IdGenero != null && filmeBucado.IdGenero != filmeAtualizado.IdGenero.ToString())
            filmeBucado.IdGenero = filmeAtualizado.IdGenero.ToString();

        if (filmeAtualizado.Imagem != null && filmeAtualizado.Imagem.Length != 0)
        {
            var pastaRelativa = "wwwroot/imagens";
            var caminhoPasta = Path.Combine(Directory.GetCurrentDirectory(), pastaRelativa);

            //Deleta arquivo antigo
            if (!String.IsNullOrEmpty(filmeBucado.Imagem))
            { 
                var caminhoAntigo = Path.Combine(caminhoPasta, filmeBucado.Imagem);

                if (System.IO.File.Exists(caminhoAntigo))
                    System.IO.File.Delete(caminhoAntigo);
            }

            //Salva nova imagem
            var extensao = Path.GetExtension(filmeAtualizado.Imagem.FileName);
            var nomeArquivo = $"{Guid.NewGuid()}{extensao}";

            if(!Directory.Exists(caminhoPasta))
                Directory.CreateDirectory(caminhoPasta);

            var caminhoCompleto = Path.Combine(caminhoPasta, nomeArquivo);

            using (var stream = new FileStream (caminhoCompleto, FileMode.Create))
            {
                await filmeAtualizado.Imagem.CopyToAsync(stream);
            }

            filmeBucado.Imagem = nomeArquivo;
        }

        try
        {
            _filmeRepository.AtualizarIdUrl(id, filmeBucado);

            return NoContent();
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }

    [HttpPut]
    public IActionResult PutBody(Filme filmeAtualizado)
    {
        try
        {
            _filmeRepository.AtualizarIdCorpo(filmeAtualizado);

            return NoContent();
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }
    [HttpDelete("{id}")]
    public IActionResult Delete(Guid id)
    {
        var filmeBuscado = _filmeRepository.BuscarPorId(id);
        if (filmeBuscado == null)
            return NotFound("Filme não encontrado!");

        var pastaRelativa = "wwwroot/imagens";
        var caminhoPasta = Path.Combine(Directory.GetCurrentDirectory(), pastaRelativa);

        //Deleta o arquivo
        if (!String.IsNullOrEmpty(filmeBuscado.Imagem))
        {
            var caminho = Path.Combine(caminhoPasta, filmeBuscado.Imagem);

            if (System.IO.File.Exists(caminho))
                System.IO.File.Delete(caminho);
        }

        try
        {
            _filmeRepository.Deletar(id);
            return NoContent();
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }
}
