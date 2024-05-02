package com.mishka.mishkabackend.Service.FAQ;

import com.mishka.mishkabackend.Entity.FAQ.Answer;
import com.mishka.mishkabackend.Entity.FAQ.Question;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface FaqService {

    Question createQuestion(Question question);

    Answer createAnswer(Answer answer);

    List<Map<String, Object>> getAllQuestionsAndAnswers();

    Optional<Question> updateQuestion(Question newQuestion, Integer id);

    Optional<Answer> updateAnswer(Answer neAnswer, Integer id);

    Void deleteQuestionWithAnswer(Integer id);
}
