package com.example.demofor9lab.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demofor9lab.entity.Pencilcase;
import com.example.demofor9lab.Service.PencilcaseService;


import java.util.List;

@RestController
@RequestMapping("/api/pencilcases")
@CrossOrigin(origins = "http://localhost:3000")
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





    @GetMapping("/filtered")
    public List<Pencilcase> getFilteredPencilcases(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String price,
            @RequestParam(required = false) String size,
            @RequestParam(required = false) String brand
    ) {
        // Implement logic to filter based on received parameters
        // Use the PencilcaseService to perform filtering and return the filtered list
        return pencilcaseService.getFilteredPencilcases(title, price, size, brand);
    }

}