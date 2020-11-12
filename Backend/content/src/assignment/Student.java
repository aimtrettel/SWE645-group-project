package assignment;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@Entity
@Table(name = "SURVEYS", schema = "swe645DB")
public class Student implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	private String sid;
	private String fName, lName, address, city, state;
	private String zip, phone, email, date;
	private String likes, interested, rating;
	
	public Student() {}
	public Student(String id) { this.sid = id; }
	public Student(String id, String fName, String lName,
			String address, String city, String state,
			String zip, String phone, String email, String date,
			String likes, String interested, String rating) {
		this.sid = id;
		this.fName = fName;
		this.lName = lName;
		this.address = address;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.phone = phone;
		this.email = email;
		this.date = date;
		this.likes = likes;
		this.interested = interested;
		this.rating = rating;
	}
	
	@Id
	@Column(name = "ID", length = 8)
	public String getSid() {return sid;}
	public void setSid(String s) {this.sid = s;}
	
	@Column(name = "FNAME", length = 20)
	public String getFName() {return(fName);}
	public void setFName(String n) {this.fName = n;}
	
	@Column(name = "LNAME", length = 20)
	public String getLName() {return(lName);}
	public void setLName(String n) {this.lName = n;}
	
	@Column(name = "ADDRESS", length = 50)
	public String getAddress() {return(address);}
	public void setAddress(String a) {this.address = a;}
	
	@Column(name = "CITY", length = 50)
	public String getCity() {return(city);}
	public void setCity(String c) {this.city = c;}
	
	@Column(name = "STATE", length = 2)
	public String getState() {return state;}
	public void setState(String s) {this.state = s;}
	
	@Column(name = "ZIP", length = 5)
	public String getZip() {return zip;}
	public void setZip(String z) {this.zip = z;}
	
	@Column(name = "PHONE")
	public String getPhone() {return phone;}
	public void setPhone(String p) {this.phone = p;}
	
	@Column(name = "EMAIL")
	public String getEmail() {return email;}
	public void setEmail(String e) {this.email = e;}
	
	@Column(name = "DATE")
	public String getDate() {return date;}
	public void setDate(String d) {this.date = d;}
	
	@Column(name = "LIKES")
	public String getLikes() {return likes;}
	public void setLikes(String l) {this.likes = l;}
	
	@Column(name = "INTEREST")
	public String getInterested() {return interested;}
	public void setInterested(String i) {this.interested = i;}
	
	@Column(name = "RATING")
	public String getRating() {return rating;}
	public void setRating(String r) {this.rating = r;}
}
