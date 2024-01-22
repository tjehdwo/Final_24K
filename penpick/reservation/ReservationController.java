package com.penpick.reservation;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/reservation")
@CrossOrigin(origins="http://localhost:3000", 
allowCredentials="true",
allowedHeaders="*")
public class ReservationController {
	private ReservationService reservationService;
	
	@Autowired
    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
	
	}
	/*@GetMapping
	public String reservationList() {
		return "redirect:/reservation/list";
	}*/

	@GetMapping("/list")
	public ResponseEntity<List<Reservation>> getAllReservation() {
		List<Reservation> reservationList = null;
		try {
			reservationList = reservationService.getAllReservation();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(reservationList);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Reservation>> getReservation(@PathVariable int id) {
		Optional<Reservation> reservation = reservationService.getReservation(id);
		return ResponseEntity.ok(reservation);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Void> registerReservation(@RequestBody Reservation reservation) {
		reservationService.saveReservation(reservation);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping("/update")
	public ResponseEntity<?> updateReservation(@RequestBody Reservation reservation) {
	    Optional<Reservation> existingReservation = reservationService.getReservation(reservation.getId());
	    
	    if (existingReservation.isEmpty()) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND)
	                .body("해당 예약 정보를 찾을 수 없습니다.");
	    }
	    
	    // 예약 정보 업데이트 로직 추가
	    
	    reservationService.saveReservation(reservation);
	    return new ResponseEntity<>(HttpStatus.OK);
	}
}
