package com.scrumzilla.client.controller;

import com.google.gwt.event.shared.HandlerManager;
import com.scrumzilla.client.ScrumzillaModel;
import com.scrumzilla.client.ScrumzillaModel.AsynchResult;
import com.scrumzilla.client.events.ScrumzillaEventDispatcher;
import com.scrumzilla.client.model.Story;
import com.scrumzilla.client.model.Task;
import com.scrumzilla.client.model.Task.TaskState;

/*
 * - Expose operations to UI
 * 		- Possible to make setters in model classes inaccessible outside controller?
 * - Keep model consistent when changes are made
 * - Notify Event Bus of changes
 */

public class ScrumzillaController {
	
	
	
	private final ScrumzillaModel fModel;
	private final ScrumzillaEventDispatcher fEventDispatcher;
	private HandlerManager fHandlerManager;

//	@Inject
	public ScrumzillaController(ScrumzillaModel model, HandlerManager scrumzillaHandlerManager, ScrumzillaEventDispatcher eventDispatcher){
		fModel = model;
		fEventDispatcher = eventDispatcher;
		fHandlerManager = scrumzillaHandlerManager;
	}
	
	public HandlerManager getHandlerManager() {
		return fHandlerManager;
	}
	
	public ScrumzillaModel getModel() {
		return fModel;
	}
	
	
	public void addTask(final Task t, final ScrumzillaControllerErrorHandler errorHandler) {
		fModel.doesTaskExist(t, new AsynchResult<Boolean>() {
			public void result(Boolean taskExists) {
				if(taskExists){
					errorHandler.taskExists(t);
				} else {
					fModel.addTask(t);
					fEventDispatcher.taskAdded(t);
				}
			}
		});
	}
	

	public void addStory(final Story s, final ScrumzillaControllerErrorHandler handler) {
		if(s.getStoryName() == null || s.getStoryName().trim().length() == 0){
			handler.invalidStoryName(s.getStoryName());
		} else {
			fModel.doesStoryExist(s, new AsynchResult<Boolean>() {
				public void result(Boolean storyExists) {
					if(storyExists){
						handler.storyExists(s);
					} else {
						fModel.addStory(s);
						fEventDispatcher.storyAdded(s);
					}
				}
			});
		}
	}
	
	public void removeStory(final Story story, final ScrumzillaControllerErrorHandler handler)  {
		fModel.doesStoryExist(story, new AsynchResult<Boolean>() {
			public void result(Boolean storyExists) {
				if(!storyExists){
					handler.storyDoesNotExist(story);
				} else {
					fModel.removeStory(story);
					fEventDispatcher.storyRemoved(story);
				}
			}
		});
	}
	

	public void moveTaskToStory(Story story, Task task){
		if(task == null){
			throw new IllegalArgumentException("Need non-null task");
		}
		
		Story originalStory = task.getStory();
		task.setStory(story);
		fModel.taskModified(task);
		fEventDispatcher.removedTaskFromStory(task, originalStory);
		fEventDispatcher.taskAdded(task);
		
	}
	
	
	public void changeTaskDescription(final Task task, String newDescription) {
		task.setDescription(newDescription);
		fModel.taskModified(task);
		fEventDispatcher.taskModified(task);
	}
	
	public void changeTaskState(Task task, TaskState taskState) {
		task.setTaskState(taskState);
		fModel.taskModified(task);
		fEventDispatcher.taskModified(task);
	}

	
	public void removeTaskFromModel(final Task task, final ScrumzillaControllerErrorHandler handler) {
		fModel.doesTaskExist(task, new AsynchResult<Boolean>() {
			public void result(Boolean taskExists) {
				if(!taskExists){
					handler.taskDoesNotExist(task);
				} else {
					fModel.removeTask(task);
					fEventDispatcher.removedTaskFromStory(task, task.getStory());
				}
			}
		});
	}

	
	
	


}
