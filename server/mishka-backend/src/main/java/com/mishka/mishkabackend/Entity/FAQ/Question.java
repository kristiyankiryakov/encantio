package com.mishka.mishkabackend.Entity.FAQ;

import com.mishka.mishkabackend.Entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Question extends BaseEntity {

    @Column(nullable = false)
    private String questionText;

}
