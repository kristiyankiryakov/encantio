package com.mishka.mishkabackend.Repository;

import com.mishka.mishkabackend.Entity.FAQ.Answer;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;

public interface AnswerRepository extends JpaRepository<Answer, Integer> {

    @Query("SELECT NEW map(q.questionText as questionText, a.answerText as answerText, q.id as questionId) FROM Answer a JOIN Question q ON a.questionId = q.id")
    List<Map<String, Object>> getAllAnswersWithQuestions();

    @Transactional
    void deleteByQuestionId(Integer questionId);
}
