package net.firminventory.firm_inventory_backend.repository;

import net.firminventory.firm_inventory_backend.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Long> {

}
