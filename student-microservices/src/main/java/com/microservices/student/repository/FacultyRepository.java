package com.microservices.student.repository;

import com.microservices.student.domain.Faculty;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Faculty entity.
 */
@SuppressWarnings("unused")
public interface FacultyRepository extends JpaRepository<Faculty,Long> {

}
