package com.apirest2.APITiendaRopa.repositories;

import com.apirest2.APITiendaRopa.models.Cliente;
import com.apirest2.APITiendaRopa.models.Pedido;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Long> {
    List<Pedido> findByFechaBetween(LocalDate fechaInicio, LocalDate fechaFin);
    List<Pedido> findByEstado(String estado);
    List<Pedido> findByClienteId(Long clienteId);
    List<Pedido> findByCliente(Cliente cliente);
}
