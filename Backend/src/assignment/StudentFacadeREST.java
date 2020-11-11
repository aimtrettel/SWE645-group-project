package assignment;

import java.util.List;
import javax.persistence.*;
import javax.ws.rs.*;
import javax.ejb.*;

@Stateless
@Path("Student")
public class StudentFacadeREST extends AbstractFacade<Student> {
	@PersistenceContext(unitName = "StudentListPU")
	private EntityManager em;
	
	public StudentFacadeREST() {
		super(Student.class);
	}
	
	@PUT
	@Override
	@Consumes({ "application/xml", "application/json" })
	public void create(Student entity) {
		super.create(entity);
	}
 
	@GET
	@Path("{id}")
	@Produces({ "application/json" })
	public Student find(@PathParam("id") Integer id) {
		return super.find(id);
	}
 
	@GET
	@Override
	@Produces({ "application/json" })
	public List<Student> findAll() {
		return super.findAll();
	}
 
	@GET
	@Path("{from}/{to}")
	@Produces({ "application/xml", "application/json" })
	public List<Student> findRange(@PathParam("from") Integer from,
			@PathParam("to") Integer to) {
		return super.findRange(new int[] { from, to });
	}
 
	@GET
	@Path("count")
	@Produces("text/plain")
	public String countREST() {
		return String.valueOf(super.count());
	}
 
	@Override
	protected EntityManager getEntityManager() {
		return em;
	}
}
