package com.mishka.mishkabackend.Entity.FAQ;

import com.mishka.mishkabackend.Entity.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Answer extends BaseEntity {

    @Column(name = "question_id", nullable = false)
    private Integer questionId;

    @Column(nullable = false)
    private String answerText;

}
