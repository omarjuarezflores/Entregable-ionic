package com.entregablespring.springfinal.modelos;

import java.sql.Date;
import javax.persistence.*;


@Entity
@Table(name= "m_cine")

public class Cine {
    @Id
    @Column
    private Integer id_cine;
    
    @Column
    private String nombre;
    
    @Column
    private Date fecha_alta;
    
    @Column
    private Date fecha_modificacion;
    
    @Column
    private Boolean registro_activo;

    /*@ManyToMany(cascade = CascadeType.ALL , fetch = FetchType.LAZY)
    @JoinTable(name = "r_cine_sala",
            joinColumns = @JoinColumn(name = "id_cine",
               referencedColumnName = "id_cine"),
            inverseJoinColumns = @JoinColumn(name = "id_sala",
               referencedColumnName = "id_sala"))
    private List<Sala> sala ;
*/


    public Integer getId_cine() {return id_cine;}

    public void setId_cine(Integer id_cine) {this.id_cine = id_cine;}

    public String getNombre() {return nombre;}

    public void setNombre(String nombre) {this.nombre = nombre;}

    public Date getFecha_alta() {
        return fecha_alta;
    }

    public void setFecha_alta(Date fecha_alta) {
        this.fecha_alta = fecha_alta;
    }

    public Date getFecha_modificacion() {
        return fecha_modificacion;
    }

    public void setFecha_modificacion(Date fecha_modificacion) {
        this.fecha_modificacion = fecha_modificacion;
    }

    
    public Boolean getRegistro_activo() {return registro_activo;}

    public void setRegistro_activo(Boolean registro_activo) {this.registro_activo = registro_activo;}

    /*public List<Sala> getSala() {
        return sala;
    }

    public void setSala(List<Sala> sala) {
        this.sala = sala;
    }*/
}
