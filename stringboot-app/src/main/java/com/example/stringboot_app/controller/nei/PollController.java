package com.example.stringboot_app.controller.nei;

import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.RestController;
import com.example.stringboot_app.entity.nei.Poll;
import com.example.stringboot_app.service.nei.PollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PollController {
    
    @Autowired
    private PollService pollService;

    @GetMapping("/api/polls")
    public List<Poll> getPolls() {
        // return Arrays.asList(
        //         new Poll(1L, "xxx"),
        //         new Poll(2L, "yyy"));

        return pollService.getAllPolls();
    }

 
    // 更新 PUT /api/updatepolls
    @PutMapping("/api/polls/{id}/edit")
    public ResponseEntity<Poll> updatePolls( @RequestBody List<Poll> pollDetails) {

        for(int i = 0; i < pollDetails.size(); i++){
            Poll poll = pollDetails.get(i);
            Optional<Poll> optionalPoll = pollService.getPollById(poll.getId());
            if (optionalPoll.isPresent()) {
                Poll existingPoll = optionalPoll.get();
                existingPoll.setQuestion(poll.getQuestion());
                existingPoll.setThcount(poll.getThcount());
                pollService.savePoll(existingPoll);
            } else {
                return ResponseEntity.notFound().build();
            }
        }
    return ResponseEntity.ok(null);
    }       

}
