package com.apirest2.APITiendaRopa.models;

import java.io.Serializable;


import jakarta.persistence.Embeddable;
import lombok.Data;


@Embeddable
@Data
public class ProductoPedidoId implements Serializable {

    private Long productoId;
    private Long pedidoId;

}