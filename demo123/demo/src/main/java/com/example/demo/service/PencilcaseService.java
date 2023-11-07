
package com.example.demo.service;
import com.example.demo.entity.Pencilcase;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

@Service
public class PencilcaseService {
    private final Map<Integer, Pencilcase> pencilcases = new HashMap<>();
    private final AtomicInteger idCounter = new AtomicInteger(0);

    public List<Pencilcase> getAllPencilcases() {
        return new ArrayList<>(pencilcases.values());
    }

    public Pencilcase getPencilcaseById(Integer id) {
        return pencilcases.get(id);
    }

    public Pencilcase createPencilcase(Pencilcase pencilcase) {
        Integer id = idCounter.incrementAndGet();
        pencilcase.setId(id);
        pencilcases.put(id, pencilcase);
        return pencilcase;
    }

    public Pencilcase updatePencilcase(Integer id, Pencilcase pencilcase) {
        if (pencilcases.containsKey(id)) {
            pencilcase.setId(id);
            pencilcases.put(id, pencilcase);
            return pencilcase;
        }
        return null;
    }

    public boolean deletePencilcase(Integer id) {
        if (pencilcases.containsKey(id)) {
            pencilcases.remove(id);
            return true;
        }
        return false;
    }
}
