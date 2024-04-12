let rooms = [
    {
      room_id: 1,
      room_name: "Sunset Serenade Suite",
      room_status: "avalable",
      amenities: "Tv,Washing Machine,Iron Box",
      seats: 5,
      price_per_hour: 2500,
    },
    {
      room_id: 2,
      room_name: "Azure Horizon Room",
      room_status: "avalable",
      amenities: "Tv,Washing Machine,Iron Box",
      seats: 4,
      price_per_hour: 2000,
    },
    {
      room_id: 3,
      room_name: "Azure Horizon Room",
      room_status: "avalable",
      amenities: "Tv,Washing Machine,Iron Box",
      seats: 6,
      price_per_hour: 3000,
    },
    {
      room_id: 4,
      room_name: "Garden View Retreat",
      room_status: "avalable",
      amenities: "Tv,Washing Machine,Iron Box",
      seats: 2,
      price_per_hour: 1000,
    },
  ];


 // The array of booked room deatail
  let BookingRoom =[]

  //Get All Room Details

  export const RoomDetail = (req,res)=>{
    res.status(200).json({message:"All Rooms fetched Successfully", List_of_Rooms : rooms})
  }

  //create New Rooms

  export const CreateRoom = (req, res)=>{
    const{room_name, room_status, amenities, seats, price_per_hour} = req.body
    const NewRoomData = {
        room_id : rooms.length+1,
        room_name : room_name,
        room_status : room_status,
        amenities : amenities,
        seats : seats,
        price_per_hour : price_per_hour
    }
    rooms.push(NewRoomData)
    res.status(200).json({message:"create new Room Successfully", New_Room:rooms})
  }



  // Book Room

  export const BookRoom = (req, res)=>{
    const{customer_name, date, arrival, departure, roomId} = req.body

    let room = rooms.filter((e)=>e.room_status == "available" && e.room_id === roomId)
    if(!room){
      return  res.status(400).json({message:"Room is Not Available"})
    }
    else{
        let BookingDate = BookingRoom.filter((room)=>{room.booking_date === date})
        if(BookingRoom>0){
          return  res.status(400).json({message:"Room Already Booked"})
        }
    
    else{
        let booking = {
            roomId: BookingRoom.length+1,
            customer_name,
            arrival,
            departure,
            Date:date,
            booking_id : BookingRoom.length+1,
            booking_date :date,
            status:"Booked"
        }
        BookingRoom.push(booking)
        return res.status(400).json({message:"Room Booked Successfully", BookedRoom:BookingRoom})
    }

  }
}

//Booked Room Details

export const BookedRoomData  = (req,res)=>{
    // Responds with data of all booked rooms
   res.status(200).json({
       message:"Successfully Fetched All Room Data",
       BookingRoom
   })
}

//All customer and their booked room details


export const AllCustomerBookedData = (req,res)=>{
  const customerData = BookingRoom.map((booking)=>{
    const Room = rooms.find((i)=>i.room_id === booking.roomId)
    return{
      Room_id:booking.roomId,
      Customer_Name:booking.customer_name,
      Date:booking.date,
      Arrival:booking.arrival,
      Departure:booking.departure
    }
  })
  res.status(200).json({message:"All Customer and their BookedRoom details",customerData})
}

//Booking Details for each customer along with book count

export const customerBookingDetails = (req,res)=>{
  const customerBooking = {}

  BookingRoom.forEach(booking=>{
    const {roomId, customer_name, booking_date, arrival, departure,booking_id,status}=booking
    if(!customerBooking[customer_name]){
      customerBooking[customer_name]=[]
    }
    customerBooking[customer_name].push({roomId,booking_date,arrival,departure,booking_id,status})
  })

  const customerdata = Object.keys(customerBooking).map(customer_name=>{
    const bookings = customerBooking[customer_name]
    const count = bookings.length
    return {customer_name, bookings, count}
  })

  res.status(200).json({message:"Customer Booked Count", customerdata})
}