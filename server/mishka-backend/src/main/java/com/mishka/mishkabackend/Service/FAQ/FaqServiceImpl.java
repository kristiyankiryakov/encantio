package com.mishka.mishkabackend.Service.FAQ;

import com.mishka.mishkabackend.Entity.FAQ.Answer;
import com.mishka.mishkabackend.Entity.FAQ.Question;
import com.mishka.mishkabackend.Enums.FaqType;
import com.mishka.mishkabackend.Exception.NotFoundException;
import com.mishka.mishkabackend.Repository.FAQ.AnswerRepository;
import com.mishka.mishkabackend.Repository.FAQ.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class FaqServiceImpl implements FaqService {

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private AnswerRepository answerRepository;

    @Override
    public Question createQuestion(Question question) {

        return questionRepository.save(question);
    }

    @Override
    public Answer createAnswer(Answer answer) {

        this.doesQuestionIdExist(answer.getQuestionId());

        return answerRepository.save(answer);
    }

    private void doesQuestionIdExist(Integer id) {

        if (!questionRepository.existsById(id)) {
            throw new NotFoundException("question", id);
        }
    }

    @Override
    public List<Map<String, Object>> getAllQuestionsAndAnswers() {
        return answerRepository.getAllAnswersWithQuestions();
    }

    @Override
    public Optional<Question> updateQuestion(Question newQuestion, Integer id) {
        this.doesEntityExistById(FaqType.QUESTION, id);

        return questionRepository.findById(id)
                .map(question -> {
                    question.setQuestionText(newQuestion.getQuestionText());

                    return questionRepository.save(question);
                });

    }

    @Override
    public Optional<Answer> updateAnswer(Answer newAnswer, Integer id) {

        this.doesEntityExistById(FaqType.ANSWER, id);

        return answerRepository.findById(id)
                .map(answer -> {
                    answer.setAnswerText(newAnswer.getAnswerText());

                    return answerRepository.save(answer);
                });

    }

    private void doesEntityExistById(FaqType type, Integer id) {
        if (type == FaqType.QUESTION) {
            if (!questionRepository.existsById(id)) {
                throw new NotFoundException("Question", id);
            }
        } else {
            if (!answerRepository.existsById(id)) {
                throw new NotFoundException("Answer", id);
            }
        }
    }

    @Override
    public Void deleteQuestionWithAnswer(Integer id) {
        this.doesEntityExistById(FaqType.QUESTION, id);


        this.answerRepository.deleteByQuestionId(id);
        this.questionRepository.deleteById(id);
        return null;
    }
}
