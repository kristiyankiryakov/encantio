package com.mishka.mishkabackend.Controller;

import com.mishka.mishkabackend.Entity.Answer;
import com.mishka.mishkabackend.Entity.Question;
import com.mishka.mishkabackend.Service.FaqService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/faq")
public class FaqController {

    private final FaqService faqService;

    public FaqController(FaqService faqService) {
        this.faqService = faqService;
    }

    @PostMapping("/question")
    public Question createQuestion(@RequestBody Question question) {
        return faqService.createQuestion(question);
    }

    @PostMapping("/answer")
    public Answer createAnswer(@RequestBody Answer answer) {
        return faqService.createAnswer(answer);
    }

    @GetMapping()
    public List<Map<String, Object>> getAllFaq() {
        return faqService.getAllQuestionsAndAnswers();
    }

    @PatchMapping("/question/{id}")
    public Optional<Question> updateQuestion(@RequestBody Question newQuestion, @PathVariable Integer id) {
        return faqService.updateQuestion(newQuestion, id);
    }

    @PatchMapping("/answer/{id}")
    public Optional<Answer> updateAnswer(@RequestBody Answer newAnswer, @PathVariable Integer id) {
        return faqService.updateAnswer(newAnswer, id);
    }

    @DeleteMapping("/{id}")
    public Void deleteQuestionWithAnswer(@PathVariable Integer id) {
        return faqService.deleteQuestionWithAnswer(id);
    }
}
