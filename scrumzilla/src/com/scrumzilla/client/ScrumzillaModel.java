package com.scrumzilla.client;

import java.util.List;

import com.scrumzilla.client.model.Story;
import com.scrumzilla.client.model.Task;

public interface ScrumzillaModel {
	
	public interface AsynchResult<T> {
		public void result(T t);
	}
	
	
	public List<Story> getSprintStories();
	public List<Task> getTasksForStory(Story story);
	public void addTask(Task t);
	public void addStory(Story s);

	public void taskModified(Task task);

	
	public void removeTask(Task task);
	public void removeStory(Story story);

	
	public void doesTaskExist(Task t, AsynchResult<Boolean> asynchResult);
	public void doesStoryExist(Story s, AsynchResult<Boolean> asynchResult);
	

}
