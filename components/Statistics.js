import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ThemeContext from '../Context/ThemeContext';

const Statistics = () => {
    const theme = React.useContext(ThemeContext);

    return (
        <View style={[styles.statistics, { backgroundColor: theme.card }]}>
            <StatisticItem label="Impressions" value="1,016" />
            <View style={[styles.verticleLine, { backgroundColor: theme.background }]}></View>
            <StatisticItem label="Orders" value="12" />
            <View style={[styles.verticleLine, { backgroundColor: theme.background }]}></View>
            <StatisticItem label="Conversion Rate" value="14%" />
        </View >
    );
};

const StatisticItem = ({ label, value }) => {
    const theme = React.useContext(ThemeContext);

    return (
        <View style={styles.statisticItem}>
            <Text style={[styles.statisticValue, { color: theme.text }]}>{value}</Text>
            <Text style={[styles.statisticLabel, { color: theme.secondaryText }]}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    statistics: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        marginHorizontal: 15,
        marginBottom: 10,
        borderRadius: 10,
    },
    statisticItem: {
        alignItems: 'center',
    },
    statisticValue: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    statisticLabel: {
        color: '#666',
    },
    verticleLine: {
        height: '100%',
        width: 1,

    },
});

export default Statistics;
