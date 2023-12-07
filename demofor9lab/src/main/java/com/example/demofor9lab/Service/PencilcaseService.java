package com.example.demofor9lab.Service;


import com.example.demofor9lab.Repository.PencilcaseRepository;
import com.example.demofor9lab.entity.Pencilcase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import java.util.List;
import java.util.stream.Collectors;


@Service
public class PencilcaseService {
    @Autowired
    private PencilcaseRepository pencilcaseRepository;

    public List<Pencilcase> getAllPencilcases() {
        return pencilcaseRepository.findAll();
    }

    public Pencilcase getPencilcaseById(Integer id) {
        return pencilcaseRepository.findById(id).orElse(null);
    }






    public List<Pencilcase> getFilteredPencilcases(String title, String price, String size, String brand) {



        List<Pencilcase> filteredPencilcases = getAllPencilcases();


        if (title != null && !title.isEmpty()) {
            filteredPencilcases = filteredPencilcases.stream()
                    .filter(p -> p.getTitle().toLowerCase().contains(title.toLowerCase()))
                    .collect(Collectors.toList());


        }

        if (brand != null && !brand.isEmpty() && !brand.equalsIgnoreCase("all")) {
            filteredPencilcases = filteredPencilcases.stream()
                    .filter(p -> p.getBrand().equalsIgnoreCase(brand))
                    .collect(Collectors.toList());
        }


        if (price != null && !price.isEmpty()) {
            if (price.equalsIgnoreCase("cheap")) {
                filteredPencilcases = filterByCheapPrice(filteredPencilcases);
            } else if (price.equalsIgnoreCase("expensive")) {
                filteredPencilcases = filterByExpensivePrice(filteredPencilcases);
            }
        }

        // Фільтрація за розміром
        if (size != null && !size.isEmpty()) {
            if (size.equalsIgnoreCase("big")) {
                filteredPencilcases = filterByBigSize(filteredPencilcases);
            } else if (size.equalsIgnoreCase("small")) {
                filteredPencilcases = filterBySmallSize(filteredPencilcases);
            }
        }

        return filteredPencilcases;
    }



    private List<Pencilcase> filterByCheapPrice(List<Pencilcase> pencilcases) {
        return pencilcases.stream()
                .filter(p -> p.getPrice() < 50)
                .collect(Collectors.toList());
    }

    private List<Pencilcase> filterByExpensivePrice(List<Pencilcase> pencilcases) {
        return pencilcases.stream()
                .filter(p -> p.getPrice() >= 50)
                .collect(Collectors.toList());
    }

    private List<Pencilcase> filterByBigSize(List<Pencilcase> pencilcases) {
        return pencilcases.stream()
                .filter(p -> p.getSize() > 2)
                .collect(Collectors.toList());
    }

    private List<Pencilcase> filterBySmallSize(List<Pencilcase> pencilcases) {
        return pencilcases.stream()
                .filter(p -> p.getSize() <= 2)
                .collect(Collectors.toList());
    }
}


