package com.apirest2.APITiendaRopa.services;

import com.apirest2.APITiendaRopa.models.Cliente;
import com.apirest2.APITiendaRopa.models.Pedido;
import com.apirest2.APITiendaRopa.repositories.ClienteRepository;
import com.apirest2.APITiendaRopa.repositories.PedidoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {
    private final ClienteRepository clienteRepository;
    private final PedidoRepository pedidoRepository;

    public ClienteService(ClienteRepository clienteRepository, PedidoRepository pedidoRepository) {
        this.clienteRepository = clienteRepository;
        this.pedidoRepository = pedidoRepository;
    }

    public Cliente getClienteConPedidos(Long clienteId) {
        Cliente cliente = clienteRepository.findById(clienteId).orElseThrow();
        List<Pedido> pedidos = pedidoRepository.findByCliente(cliente);
        cliente.setPedidos(pedidos);
        return cliente;
    }
}