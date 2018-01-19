package com.music.dao.impl;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.apache.logging.log4j.LogManager;
import org.springframework.stereotype.Repository;

import com.music.dao.UserDao;
import com.music.entity.User;

@Repository("userDao")
public class UserDaoimpl implements UserDao {
	static{
		System.out.println("你好啊");
	}
	@PersistenceContext(unitName="default")
    private EntityManager entityManager;
	
	@Transactional(rollbackOn = Exception.class)
	@Override
	public User userLogin(User user) {
		LogManager.getLogger().debug("进入userDaoimpl的userLogin()处理...");
		this.entityManager.persist(user);
		System.out.println(user.getId()+"****"+user);
		return user;
	}
	
	@Transactional(rollbackOn = Exception.class)
    public void save(User user) {
         
        //System.out.println(entityManagerFactory);
        this.entityManager.persist(user);
        //System.out.println("---"+user.getUserId());
    }

}
