module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define('question', {
        
    	id: {
    		type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
    	},
    
    	professor_id:{
    		type: Sequelize.INTEGER,
    		allowNull: false
    	},
    	
    	subarea_cod:{
    		type: Sequelize.INTEGER,
    		allowNull: false
    	},
        
    	area_cod:{
    		type: Sequelize.INTEGER,
    		allowNull: false
    	},
    	
    	statement: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        approved: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false;
        },
        
        comment: {
        	type: Sequelize.STRING,
        	notEmpty: true;
        },
      
        study_material: {
        	type: Sequelize.STRING,
        	notEmpty: false;
        }
    },
        
    {
        underscored: true
    });

    return Question;
}