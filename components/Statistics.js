import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ThemeContext from '../Context/ThemeContext';

const Statistics = () => {
    const theme = React.useContext(ThemeContext);

    return (
        <View style={[styles.statistics, { backgroundColor: theme.card }]}>
            <StatisticItem label="Impressions" value="1,016" />
            <StatisticItem label="Orders" value="12" />
            <StatisticItem label="Conversion Rate" value="14%" />
        </View>
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
        marginBottom: 10,
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
});

export default Statistics;
