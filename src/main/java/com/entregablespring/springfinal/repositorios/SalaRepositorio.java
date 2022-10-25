package com.entregablespring.springfinal.repositorios;

import com.entregablespring.springfinal.modelos.Sala;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SalaRepositorio extends JpaRepository<Sala, Long> {
    @Query("select e from Sala e")
    List<Sala> obtenerSala();

}