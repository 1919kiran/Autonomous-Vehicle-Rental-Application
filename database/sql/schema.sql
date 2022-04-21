create table user (
  user_id varchar(100),
  password varchar(1024) not null,
  first_name varchar(100) not null,
  last_name varchar(100) not null,
  email varchar(100) not null,
  dob date not null,
  phone varchar(100) not null,
  user_tier varchar(100),
  user_type varchar(100) DEFAULT "normal",
  user_location varchar(100),
  primary key (user_id)
);

create table vehicle(
  vehicle_id varchar(100) not null,
  vehicle_class varchar(100) not null,
  vehicle_model varchar(100) not null,
  vehicle_brand varchar(100) not null,
  vehicle_license varchar(100) not null,
  primary key (vehicle_id)
);

create table reservation(
  reservation_id varchar(100) not null,
  vehichle_id varchar(100) not null,
  user_id varchar(100) not null,
  start_location varchar(100) not null,
  end_location varchar(100) not null,
  start_time datetime not null,
  end_time datetime not null,
  payment_type varchar(100) not null,
  trip_price float,
  primary key (reservation_id)
  foreign key (user_id) references User (user_id)
  foreign key (vehicle_id) references Vehicle (vehicle_id)
);

