package com.mishka.mishkabackend.Repository;

import com.mishka.mishkabackend.Entity.FAQ.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Integer> {


}
