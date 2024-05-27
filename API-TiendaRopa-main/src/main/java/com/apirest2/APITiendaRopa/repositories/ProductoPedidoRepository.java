package com.apirest2.APITiendaRopa.repositories;

import com.apirest2.APITiendaRopa.models.ProductoPedido;
import com.apirest2.APITiendaRopa.models.ProductoPedidoId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoPedidoRepository extends JpaRepository<ProductoPedido, ProductoPedidoId> {
}