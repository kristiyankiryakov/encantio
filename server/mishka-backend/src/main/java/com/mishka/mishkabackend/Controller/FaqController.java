package com.mishka.mishkabackend.Controller;

import com.mishka.mishkabackend.Entity.FAQ.Answer;
import com.mishka.mishkabackend.Entity.FAQ.Question;
import com.mishka.mishkabackend.Service.FAQ.FaqService;
import jakarta.validation.Valid;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/faq")
@Validated
public class FaqController {

    private final FaqService faqService;

    public FaqController(FaqService faqService) {
        this.faqService = faqService;
    }

    @PostMapping("/question")
    public Question createQuestion(@Valid @RequestBody Question question) {
        return faqService.createQuestion(question);
    }

    @PostMapping("/answer")
    public Answer createAnswer(@Valid @RequestBody Answer answer) {
        return faqService.createAnswer(answer);
    }

    @GetMapping()
    public List<Map<String, Object>> getAllFaq() {
        return faqService.getAllQuestionsAndAnswers();
    }

    @PatchMapping("/question/{id}")
    public Optional<Question> updateQuestion(@Valid @RequestBody Question newQuestion, @PathVariable Integer id) {
        return faqService.updateQuestion(newQuestion, id);
    }

    @PatchMapping("/answer/{id}")
    public Optional<Answer> updateAnswer(@Valid @RequestBody Answer newAnswer,@Valid @PathVariable Integer id) {
        return faqService.updateAnswer(newAnswer, id);
    }

    @DeleteMapping("/{id}")
    public Void deleteQuestionWithAnswer(@Valid @PathVariable Integer id) {
        return faqService.deleteQuestionWithAnswer(id);
    }
}
