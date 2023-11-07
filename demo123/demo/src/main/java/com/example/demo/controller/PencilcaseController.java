
package com.example.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.entity.Pencilcase;
import com.example.demo.service.PencilcaseService;


import java.util.List;

@RestController
@RequestMapping("/api/pencilcases")
public class PencilcaseController {

    @Autowired
    private PencilcaseService pencilcaseService;

    @GetMapping
    public List<Pencilcase> getAllPencilcases() {
        return pencilcaseService.getAllPencilcases();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pencilcase> getPencilcaseById(@PathVariable int id) {
        Pencilcase pencilcase = pencilcaseService.getPencilcaseById(id);
        return pencilcase != null ? ResponseEntity.ok(pencilcase) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public Pencilcase createPencilcase(@RequestBody Pencilcase pencilcase) {
        return pencilcaseService.createPencilcase(pencilcase);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pencilcase> updatePencilcase(@PathVariable int id, @RequestBody Pencilcase pencilcase) {
        Pencilcase updatedPencilcase = pencilcaseService.updatePencilcase(id, pencilcase);
        return updatedPencilcase != null ? ResponseEntity.ok(updatedPencilcase) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePencilcase(@PathVariable int id) {
        if (pencilcaseService.deletePencilcase(id)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
