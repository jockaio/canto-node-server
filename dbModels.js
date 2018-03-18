module.exports = function(sequelize, DataTypes) {
    var Word = sequelize.define('Word', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true },
        item: {
            type: DataTypes.TEXT,
            allowNull: false },
        romanization: {
            type: DataTypes.TEXT,
            allowNull: false },
        translation: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    })

    return Word;
};