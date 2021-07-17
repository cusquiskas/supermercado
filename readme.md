CREATE TABLE `TIENDA` (
  `tie_id` int(11) NOT NULL,
  `tie_name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `TIENDA`
  ADD PRIMARY KEY (`tie_id`);

ALTER TABLE `TIENDA`
  MODIFY `tie_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

CREATE TABLE `COMPRA` (
  `com_id` int(11) NOT NULL,
  `com_date` date NOT NULL,
  `com_tie_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

ALTER TABLE `COMPRA`
  ADD PRIMARY KEY (`com_id`),
  ADD KEY `COMPRA_TIENDA_FK` (`com_tie_id`);

ALTER TABLE `COMPRA`
  MODIFY `com_id` int(11) NOT NULL AUTO_INCREMENT;


ALTER TABLE `COMPRA`
  ADD CONSTRAINT `COMPRA_TIENDA_FK` FOREIGN KEY (`com_tie_id`) REFERENCES `TIENDA` (`tie_id`);
COMMIT;

