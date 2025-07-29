package net.firminventory.firm_inventory_backend.repository;
import net.firminventory.firm_inventory_backend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}