package com.apirest2.APITiendaRopa.repositories;

import com.apirest2.APITiendaRopa.models.Producto;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    List<Producto> findByCategoria(String categoria);
    List<Producto> findByPrecioBetween(BigDecimal precioMin, BigDecimal precioMax);
    List<Producto> findByNombreContainingIgnoreCase(String nombre);
}