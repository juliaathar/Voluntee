﻿using api.voluntee.Domains;
using api.voluntee.Dtos;
using api.voluntee.Interfaces;
using api.voluntee.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.voluntee.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private IUsuarioRepository usuarioRepository { get; set; }

        public UsuarioController()
        {
            usuarioRepository = new UsuarioRepository();
        }

        [HttpPost]
        public IActionResult Cadastrar(Usuario usuario)
        {
            try
            {
                usuarioRepository.Cadastrar(usuario);
                return StatusCode(201);
            }
            catch (Exception)
            {

                throw;
            }
        } 
        
        [HttpPatch("Editar o perfil do usuário")]
        public IActionResult EditarPerfil(Guid id, UsuarioUpdateDto usuario)
        {
            try
            {
                usuarioRepository.EditarPerfil(id, usuario);
                return StatusCode(201);
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
