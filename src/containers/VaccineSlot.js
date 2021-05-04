import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Badge, Card} from 'react-native-paper';
import VaccineSlotDetails from '../components/VaccineSlotDetails';
import {globalColors, globalStyles} from '../styles/styles';

export default function VaccineSlot({slot}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setOpenModal(true)}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.title}>{slot.name}</Text>
            <Text style={styles.subtitle}>{slot.address}</Text>
          </Card.Content>
          <View>
            {slot.fee_type === 'Free' ? (
              <Badge size={24} style={styles.free}>
                Free
              </Badge>
            ) : (
              <>
                {slot.vaccine_fees?.map(({vaccine, fee}) => (
                  <Badge size={24} style={styles.paid}>
                    {vaccine}: ₹{fee}
                  </Badge>
                ))}
              </>
            )}
          </View>
        </Card>
      </TouchableOpacity>
      <VaccineSlotDetails
        slot={slot}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: globalColors.LightGray,
    marginVertical: 5,
  },
  title: {
    color: globalColors.Light,
    ...globalStyles.textTitle,
  },
  subtitle: {
    color: globalColors.Light,
    ...globalStyles.textSubTitle,
  },
  free: {
    backgroundColor: globalColors.Success,
    fontSize: 12,
  },
  paid: {
    color: globalColors.Dark,
    fontSize: 12,
  },
});
