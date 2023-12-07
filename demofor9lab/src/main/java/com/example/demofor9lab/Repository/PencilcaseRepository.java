package com.example.demofor9lab.Repository;


import com.example.demofor9lab.entity.Pencilcase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface PencilcaseRepository extends JpaRepository<Pencilcase, Integer> {
    List<Pencilcase> findByTitle(String title);

}